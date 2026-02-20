import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4457 } from "./fragment4457";
import type { FragmentToken4458 } from "./fragment4458";

export const FRAGMENT_4459 = gql(`
  fragment Fragment4459 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult4459 = ResultOf<typeof FRAGMENT_4459>;
type FragmentSelf4459 = NonNullable<FragmentResult4459>;

export type FragmentToken4459 =
  | FragmentSelf4459["__typename"]
  | FragmentSelf4459["typenameHint"] | FragmentToken4457 | FragmentToken4458;
