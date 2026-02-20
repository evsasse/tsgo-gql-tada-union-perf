import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4183 } from "./fragment4183";
import type { FragmentToken4184 } from "./fragment4184";

export const FRAGMENT_4185 = gql(`
  fragment Fragment4185 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult4185 = ResultOf<typeof FRAGMENT_4185>;
type FragmentSelf4185 = NonNullable<FragmentResult4185>;

export type FragmentToken4185 =
  | FragmentSelf4185["__typename"]
  | FragmentSelf4185["typenameHint"] | FragmentToken4183 | FragmentToken4184;
