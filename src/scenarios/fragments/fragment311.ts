import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken309 } from "./fragment309";
import type { FragmentToken310 } from "./fragment310";

export const FRAGMENT_311 = gql(`
  fragment Fragment311 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult311 = ResultOf<typeof FRAGMENT_311>;
type FragmentSelf311 = NonNullable<FragmentResult311>;

export type FragmentToken311 =
  | FragmentSelf311["__typename"]
  | FragmentSelf311["typenameHint"] | FragmentToken309 | FragmentToken310;
