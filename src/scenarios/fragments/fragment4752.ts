import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4750 } from "./fragment4750";
import type { FragmentToken4751 } from "./fragment4751";

export const FRAGMENT_4752 = gql(`
  fragment Fragment4752 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult4752 = ResultOf<typeof FRAGMENT_4752>;
type FragmentSelf4752 = NonNullable<FragmentResult4752>;

export type FragmentToken4752 =
  | FragmentSelf4752["__typename"]
  | FragmentSelf4752["typenameHint"] | FragmentToken4750 | FragmentToken4751;
