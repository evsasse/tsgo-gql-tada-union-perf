import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4267 } from "./fragment4267";
import type { FragmentToken4268 } from "./fragment4268";

export const FRAGMENT_4269 = gql(`
  fragment Fragment4269 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult4269 = ResultOf<typeof FRAGMENT_4269>;
type FragmentSelf4269 = NonNullable<FragmentResult4269>;

export type FragmentToken4269 =
  | FragmentSelf4269["__typename"]
  | FragmentSelf4269["typenameHint"] | FragmentToken4267 | FragmentToken4268;
