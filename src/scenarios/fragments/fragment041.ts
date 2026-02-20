import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken039 } from "./fragment039";
import type { FragmentToken040 } from "./fragment040";

export const FRAGMENT_041 = gql(`
  fragment Fragment041 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult041 = ResultOf<typeof FRAGMENT_041>;
type FragmentSelf041 = NonNullable<FragmentResult041>;

export type FragmentToken041 =
  | FragmentSelf041["__typename"]
  | FragmentSelf041["typenameHint"] | FragmentToken039 | FragmentToken040;
