import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken811 } from "./fragment811";
import type { FragmentToken812 } from "./fragment812";

export const FRAGMENT_813 = gql(`
  fragment Fragment813 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult813 = ResultOf<typeof FRAGMENT_813>;
type FragmentSelf813 = NonNullable<FragmentResult813>;

export type FragmentToken813 =
  | FragmentSelf813["__typename"]
  | FragmentSelf813["typenameHint"] | FragmentToken811 | FragmentToken812;
