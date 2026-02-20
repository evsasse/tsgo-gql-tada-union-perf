import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken267 } from "./fragment267";
import type { FragmentToken268 } from "./fragment268";

export const FRAGMENT_269 = gql(`
  fragment Fragment269 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult269 = ResultOf<typeof FRAGMENT_269>;
type FragmentSelf269 = NonNullable<FragmentResult269>;

export type FragmentToken269 =
  | FragmentSelf269["__typename"]
  | FragmentSelf269["typenameHint"] | FragmentToken267 | FragmentToken268;
