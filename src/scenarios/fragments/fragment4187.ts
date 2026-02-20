import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4185 } from "./fragment4185";
import type { FragmentToken4186 } from "./fragment4186";

export const FRAGMENT_4187 = gql(`
  fragment Fragment4187 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult4187 = ResultOf<typeof FRAGMENT_4187>;
type FragmentSelf4187 = NonNullable<FragmentResult4187>;

export type FragmentToken4187 =
  | FragmentSelf4187["__typename"]
  | FragmentSelf4187["typenameHint"] | FragmentToken4185 | FragmentToken4186;
