import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1425 } from "./fragment1425";
import type { FragmentToken1426 } from "./fragment1426";

export const FRAGMENT_1427 = gql(`
  fragment Fragment1427 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult1427 = ResultOf<typeof FRAGMENT_1427>;
type FragmentSelf1427 = NonNullable<FragmentResult1427>;

export type FragmentToken1427 =
  | FragmentSelf1427["__typename"]
  | FragmentSelf1427["typenameHint"] | FragmentToken1425 | FragmentToken1426;
