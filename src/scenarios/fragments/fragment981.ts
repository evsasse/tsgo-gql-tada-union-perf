import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken979 } from "./fragment979";
import type { FragmentToken980 } from "./fragment980";

export const FRAGMENT_981 = gql(`
  fragment Fragment981 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult981 = ResultOf<typeof FRAGMENT_981>;
type FragmentSelf981 = NonNullable<FragmentResult981>;

export type FragmentToken981 =
  | FragmentSelf981["__typename"]
  | FragmentSelf981["typenameHint"] | FragmentToken979 | FragmentToken980;
