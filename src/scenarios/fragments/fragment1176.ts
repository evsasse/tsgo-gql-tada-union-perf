import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1174 } from "./fragment1174";
import type { FragmentToken1175 } from "./fragment1175";

export const FRAGMENT_1176 = gql(`
  fragment Fragment1176 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult1176 = ResultOf<typeof FRAGMENT_1176>;
type FragmentSelf1176 = NonNullable<FragmentResult1176>;

export type FragmentToken1176 =
  | FragmentSelf1176["__typename"]
  | FragmentSelf1176["typenameHint"] | FragmentToken1174 | FragmentToken1175;
