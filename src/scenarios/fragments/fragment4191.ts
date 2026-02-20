import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4189 } from "./fragment4189";
import type { FragmentToken4190 } from "./fragment4190";

export const FRAGMENT_4191 = gql(`
  fragment Fragment4191 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult4191 = ResultOf<typeof FRAGMENT_4191>;
type FragmentSelf4191 = NonNullable<FragmentResult4191>;

export type FragmentToken4191 =
  | FragmentSelf4191["__typename"]
  | FragmentSelf4191["typenameHint"] | FragmentToken4189 | FragmentToken4190;
