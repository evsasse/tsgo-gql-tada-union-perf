import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4945 } from "./fragment4945";
import type { FragmentToken4946 } from "./fragment4946";

export const FRAGMENT_4947 = gql(`
  fragment Fragment4947 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult4947 = ResultOf<typeof FRAGMENT_4947>;
type FragmentSelf4947 = NonNullable<FragmentResult4947>;

export type FragmentToken4947 =
  | FragmentSelf4947["__typename"]
  | FragmentSelf4947["typenameHint"] | FragmentToken4945 | FragmentToken4946;
