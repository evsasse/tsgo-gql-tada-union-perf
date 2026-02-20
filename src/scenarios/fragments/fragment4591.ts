import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4589 } from "./fragment4589";
import type { FragmentToken4590 } from "./fragment4590";

export const FRAGMENT_4591 = gql(`
  fragment Fragment4591 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult4591 = ResultOf<typeof FRAGMENT_4591>;
type FragmentSelf4591 = NonNullable<FragmentResult4591>;

export type FragmentToken4591 =
  | FragmentSelf4591["__typename"]
  | FragmentSelf4591["typenameHint"] | FragmentToken4589 | FragmentToken4590;
