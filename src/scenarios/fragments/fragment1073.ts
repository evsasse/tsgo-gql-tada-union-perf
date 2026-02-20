import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1071 } from "./fragment1071";
import type { FragmentToken1072 } from "./fragment1072";

export const FRAGMENT_1073 = gql(`
  fragment Fragment1073 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult1073 = ResultOf<typeof FRAGMENT_1073>;
type FragmentSelf1073 = NonNullable<FragmentResult1073>;

export type FragmentToken1073 =
  | FragmentSelf1073["__typename"]
  | FragmentSelf1073["typenameHint"] | FragmentToken1071 | FragmentToken1072;
