import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3242 } from "./fragment3242";
import type { FragmentToken3243 } from "./fragment3243";

export const FRAGMENT_3244 = gql(`
  fragment Fragment3244 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult3244 = ResultOf<typeof FRAGMENT_3244>;
type FragmentSelf3244 = NonNullable<FragmentResult3244>;

export type FragmentToken3244 =
  | FragmentSelf3244["__typename"]
  | FragmentSelf3244["typenameHint"] | FragmentToken3242 | FragmentToken3243;
