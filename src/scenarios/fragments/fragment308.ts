import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken306 } from "./fragment306";
import type { FragmentToken307 } from "./fragment307";

export const FRAGMENT_308 = gql(`
  fragment Fragment308 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult308 = ResultOf<typeof FRAGMENT_308>;
type FragmentSelf308 = NonNullable<FragmentResult308>;

export type FragmentToken308 =
  | FragmentSelf308["__typename"]
  | FragmentSelf308["typenameHint"] | FragmentToken306 | FragmentToken307;
