import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken578 } from "./fragment578";
import type { FragmentToken579 } from "./fragment579";

export const FRAGMENT_580 = gql(`
  fragment Fragment580 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult580 = ResultOf<typeof FRAGMENT_580>;
type FragmentSelf580 = NonNullable<FragmentResult580>;

export type FragmentToken580 =
  | FragmentSelf580["__typename"]
  | FragmentSelf580["typenameHint"] | FragmentToken578 | FragmentToken579;
