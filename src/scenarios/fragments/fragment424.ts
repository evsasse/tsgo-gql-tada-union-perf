import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken422 } from "./fragment422";
import type { FragmentToken423 } from "./fragment423";

export const FRAGMENT_424 = gql(`
  fragment Fragment424 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult424 = ResultOf<typeof FRAGMENT_424>;
type FragmentSelf424 = NonNullable<FragmentResult424>;

export type FragmentToken424 =
  | FragmentSelf424["__typename"]
  | FragmentSelf424["typenameHint"] | FragmentToken422 | FragmentToken423;
