import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4097 } from "./fragment4097";
import type { FragmentToken4098 } from "./fragment4098";

export const FRAGMENT_4099 = gql(`
  fragment Fragment4099 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult4099 = ResultOf<typeof FRAGMENT_4099>;
type FragmentSelf4099 = NonNullable<FragmentResult4099>;

export type FragmentToken4099 =
  | FragmentSelf4099["__typename"]
  | FragmentSelf4099["typenameHint"] | FragmentToken4097 | FragmentToken4098;
