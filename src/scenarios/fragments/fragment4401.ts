import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4399 } from "./fragment4399";
import type { FragmentToken4400 } from "./fragment4400";

export const FRAGMENT_4401 = gql(`
  fragment Fragment4401 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult4401 = ResultOf<typeof FRAGMENT_4401>;
type FragmentSelf4401 = NonNullable<FragmentResult4401>;

export type FragmentToken4401 =
  | FragmentSelf4401["__typename"]
  | FragmentSelf4401["typenameHint"] | FragmentToken4399 | FragmentToken4400;
