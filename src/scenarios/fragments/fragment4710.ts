import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4708 } from "./fragment4708";
import type { FragmentToken4709 } from "./fragment4709";

export const FRAGMENT_4710 = gql(`
  fragment Fragment4710 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult4710 = ResultOf<typeof FRAGMENT_4710>;
type FragmentSelf4710 = NonNullable<FragmentResult4710>;

export type FragmentToken4710 =
  | FragmentSelf4710["__typename"]
  | FragmentSelf4710["typenameHint"] | FragmentToken4708 | FragmentToken4709;
