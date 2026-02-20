import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken266 } from "./fragment266";
import type { FragmentToken267 } from "./fragment267";

export const FRAGMENT_268 = gql(`
  fragment Fragment268 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult268 = ResultOf<typeof FRAGMENT_268>;
type FragmentSelf268 = NonNullable<FragmentResult268>;

export type FragmentToken268 =
  | FragmentSelf268["__typename"]
  | FragmentSelf268["typenameHint"] | FragmentToken266 | FragmentToken267;
