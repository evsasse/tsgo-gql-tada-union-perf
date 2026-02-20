import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken059 } from "./fragment059";
import type { FragmentToken060 } from "./fragment060";

export const FRAGMENT_061 = gql(`
  fragment Fragment061 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult061 = ResultOf<typeof FRAGMENT_061>;
type FragmentSelf061 = NonNullable<FragmentResult061>;

export type FragmentToken061 =
  | FragmentSelf061["__typename"]
  | FragmentSelf061["typenameHint"] | FragmentToken059 | FragmentToken060;
