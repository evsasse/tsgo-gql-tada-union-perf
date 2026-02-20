import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken897 } from "./fragment897";
import type { FragmentToken898 } from "./fragment898";

export const FRAGMENT_899 = gql(`
  fragment Fragment899 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult899 = ResultOf<typeof FRAGMENT_899>;
type FragmentSelf899 = NonNullable<FragmentResult899>;

export type FragmentToken899 =
  | FragmentSelf899["__typename"]
  | FragmentSelf899["typenameHint"] | FragmentToken897 | FragmentToken898;
