import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1225 } from "./fragment1225";
import type { FragmentToken1226 } from "./fragment1226";

export const FRAGMENT_1227 = gql(`
  fragment Fragment1227 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult1227 = ResultOf<typeof FRAGMENT_1227>;
type FragmentSelf1227 = NonNullable<FragmentResult1227>;

export type FragmentToken1227 =
  | FragmentSelf1227["__typename"]
  | FragmentSelf1227["typenameHint"] | FragmentToken1225 | FragmentToken1226;
