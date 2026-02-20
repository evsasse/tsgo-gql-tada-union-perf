import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1627 } from "./fragment1627";
import type { FragmentToken1628 } from "./fragment1628";

export const FRAGMENT_1629 = gql(`
  fragment Fragment1629 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult1629 = ResultOf<typeof FRAGMENT_1629>;
type FragmentSelf1629 = NonNullable<FragmentResult1629>;

export type FragmentToken1629 =
  | FragmentSelf1629["__typename"]
  | FragmentSelf1629["typenameHint"] | FragmentToken1627 | FragmentToken1628;
