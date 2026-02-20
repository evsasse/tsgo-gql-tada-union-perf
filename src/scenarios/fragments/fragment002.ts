import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken001 } from "./fragment001";

export const FRAGMENT_002 = gql(`
  fragment Fragment002 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult002 = ResultOf<typeof FRAGMENT_002>;
type FragmentSelf002 = NonNullable<FragmentResult002>;

export type FragmentToken002 =
  | FragmentSelf002["__typename"]
  | FragmentSelf002["typenameHint"] | FragmentToken001;
