import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken980 } from "./fragment980";
import type { FragmentToken981 } from "./fragment981";

export const FRAGMENT_982 = gql(`
  fragment Fragment982 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult982 = ResultOf<typeof FRAGMENT_982>;
type FragmentSelf982 = NonNullable<FragmentResult982>;

export type FragmentToken982 =
  | FragmentSelf982["__typename"]
  | FragmentSelf982["typenameHint"] | FragmentToken980 | FragmentToken981;
