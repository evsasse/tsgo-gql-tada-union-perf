import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken080 } from "./fragment080";
import type { FragmentToken081 } from "./fragment081";

export const FRAGMENT_082 = gql(`
  fragment Fragment082 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult082 = ResultOf<typeof FRAGMENT_082>;
type FragmentSelf082 = NonNullable<FragmentResult082>;

export type FragmentToken082 =
  | FragmentSelf082["__typename"]
  | FragmentSelf082["typenameHint"] | FragmentToken080 | FragmentToken081;
