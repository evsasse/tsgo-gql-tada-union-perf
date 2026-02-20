import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken506 } from "./fragment506";
import type { FragmentToken507 } from "./fragment507";

export const FRAGMENT_508 = gql(`
  fragment Fragment508 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult508 = ResultOf<typeof FRAGMENT_508>;
type FragmentSelf508 = NonNullable<FragmentResult508>;

export type FragmentToken508 =
  | FragmentSelf508["__typename"]
  | FragmentSelf508["typenameHint"] | FragmentToken506 | FragmentToken507;
