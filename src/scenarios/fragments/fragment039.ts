import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken037 } from "./fragment037";
import type { FragmentToken038 } from "./fragment038";

export const FRAGMENT_039 = gql(`
  fragment Fragment039 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult039 = ResultOf<typeof FRAGMENT_039>;
type FragmentSelf039 = NonNullable<FragmentResult039>;

export type FragmentToken039 =
  | FragmentSelf039["__typename"]
  | FragmentSelf039["typenameHint"] | FragmentToken037 | FragmentToken038;
