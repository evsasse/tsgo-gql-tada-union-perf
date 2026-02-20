import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4268 } from "./fragment4268";
import type { FragmentToken4269 } from "./fragment4269";

export const FRAGMENT_4270 = gql(`
  fragment Fragment4270 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult4270 = ResultOf<typeof FRAGMENT_4270>;
type FragmentSelf4270 = NonNullable<FragmentResult4270>;

export type FragmentToken4270 =
  | FragmentSelf4270["__typename"]
  | FragmentSelf4270["typenameHint"] | FragmentToken4268 | FragmentToken4269;
