import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4184 } from "./fragment4184";
import type { FragmentToken4185 } from "./fragment4185";

export const FRAGMENT_4186 = gql(`
  fragment Fragment4186 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult4186 = ResultOf<typeof FRAGMENT_4186>;
type FragmentSelf4186 = NonNullable<FragmentResult4186>;

export type FragmentToken4186 =
  | FragmentSelf4186["__typename"]
  | FragmentSelf4186["typenameHint"] | FragmentToken4184 | FragmentToken4185;
