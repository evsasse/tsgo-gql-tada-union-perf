import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4325 } from "./fragment4325";
import type { FragmentToken4326 } from "./fragment4326";

export const FRAGMENT_4327 = gql(`
  fragment Fragment4327 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult4327 = ResultOf<typeof FRAGMENT_4327>;
type FragmentSelf4327 = NonNullable<FragmentResult4327>;

export type FragmentToken4327 =
  | FragmentSelf4327["__typename"]
  | FragmentSelf4327["typenameHint"] | FragmentToken4325 | FragmentToken4326;
