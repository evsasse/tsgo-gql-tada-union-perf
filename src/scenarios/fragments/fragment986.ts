import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken984 } from "./fragment984";
import type { FragmentToken985 } from "./fragment985";

export const FRAGMENT_986 = gql(`
  fragment Fragment986 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult986 = ResultOf<typeof FRAGMENT_986>;
type FragmentSelf986 = NonNullable<FragmentResult986>;

export type FragmentToken986 =
  | FragmentSelf986["__typename"]
  | FragmentSelf986["typenameHint"] | FragmentToken984 | FragmentToken985;
