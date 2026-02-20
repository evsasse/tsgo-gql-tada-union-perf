import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken255 } from "./fragment255";
import type { FragmentToken256 } from "./fragment256";

export const FRAGMENT_257 = gql(`
  fragment Fragment257 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult257 = ResultOf<typeof FRAGMENT_257>;
type FragmentSelf257 = NonNullable<FragmentResult257>;

export type FragmentToken257 =
  | FragmentSelf257["__typename"]
  | FragmentSelf257["typenameHint"] | FragmentToken255 | FragmentToken256;
