import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4434 } from "./fragment4434";
import type { FragmentToken4435 } from "./fragment4435";

export const FRAGMENT_4436 = gql(`
  fragment Fragment4436 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult4436 = ResultOf<typeof FRAGMENT_4436>;
type FragmentSelf4436 = NonNullable<FragmentResult4436>;

export type FragmentToken4436 =
  | FragmentSelf4436["__typename"]
  | FragmentSelf4436["typenameHint"] | FragmentToken4434 | FragmentToken4435;
