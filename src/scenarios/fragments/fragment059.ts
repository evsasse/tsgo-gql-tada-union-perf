import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken057 } from "./fragment057";
import type { FragmentToken058 } from "./fragment058";

export const FRAGMENT_059 = gql(`
  fragment Fragment059 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult059 = ResultOf<typeof FRAGMENT_059>;
type FragmentSelf059 = NonNullable<FragmentResult059>;

export type FragmentToken059 =
  | FragmentSelf059["__typename"]
  | FragmentSelf059["typenameHint"] | FragmentToken057 | FragmentToken058;
