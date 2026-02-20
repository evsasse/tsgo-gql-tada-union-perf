import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4186 } from "./fragment4186";
import type { FragmentToken4187 } from "./fragment4187";

export const FRAGMENT_4188 = gql(`
  fragment Fragment4188 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult4188 = ResultOf<typeof FRAGMENT_4188>;
type FragmentSelf4188 = NonNullable<FragmentResult4188>;

export type FragmentToken4188 =
  | FragmentSelf4188["__typename"]
  | FragmentSelf4188["typenameHint"] | FragmentToken4186 | FragmentToken4187;
