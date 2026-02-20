import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4749 } from "./fragment4749";
import type { FragmentToken4750 } from "./fragment4750";

export const FRAGMENT_4751 = gql(`
  fragment Fragment4751 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult4751 = ResultOf<typeof FRAGMENT_4751>;
type FragmentSelf4751 = NonNullable<FragmentResult4751>;

export type FragmentToken4751 =
  | FragmentSelf4751["__typename"]
  | FragmentSelf4751["typenameHint"] | FragmentToken4749 | FragmentToken4750;
