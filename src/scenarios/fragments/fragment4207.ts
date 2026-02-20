import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4205 } from "./fragment4205";
import type { FragmentToken4206 } from "./fragment4206";

export const FRAGMENT_4207 = gql(`
  fragment Fragment4207 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult4207 = ResultOf<typeof FRAGMENT_4207>;
type FragmentSelf4207 = NonNullable<FragmentResult4207>;

export type FragmentToken4207 =
  | FragmentSelf4207["__typename"]
  | FragmentSelf4207["typenameHint"] | FragmentToken4205 | FragmentToken4206;
