import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken242 } from "./fragment242";
import type { FragmentToken243 } from "./fragment243";

export const FRAGMENT_244 = gql(`
  fragment Fragment244 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult244 = ResultOf<typeof FRAGMENT_244>;
type FragmentSelf244 = NonNullable<FragmentResult244>;

export type FragmentToken244 =
  | FragmentSelf244["__typename"]
  | FragmentSelf244["typenameHint"] | FragmentToken242 | FragmentToken243;
