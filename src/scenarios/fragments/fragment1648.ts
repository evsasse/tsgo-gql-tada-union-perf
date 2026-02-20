import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1646 } from "./fragment1646";
import type { FragmentToken1647 } from "./fragment1647";

export const FRAGMENT_1648 = gql(`
  fragment Fragment1648 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult1648 = ResultOf<typeof FRAGMENT_1648>;
type FragmentSelf1648 = NonNullable<FragmentResult1648>;

export type FragmentToken1648 =
  | FragmentSelf1648["__typename"]
  | FragmentSelf1648["typenameHint"] | FragmentToken1646 | FragmentToken1647;
