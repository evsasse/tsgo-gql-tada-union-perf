import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken231 } from "./fragment231";
import type { FragmentToken232 } from "./fragment232";

export const FRAGMENT_233 = gql(`
  fragment Fragment233 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult233 = ResultOf<typeof FRAGMENT_233>;
type FragmentSelf233 = NonNullable<FragmentResult233>;

export type FragmentToken233 =
  | FragmentSelf233["__typename"]
  | FragmentSelf233["typenameHint"] | FragmentToken231 | FragmentToken232;
