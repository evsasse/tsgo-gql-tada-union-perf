import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4575 } from "./fragment4575";
import type { FragmentToken4576 } from "./fragment4576";

export const FRAGMENT_4577 = gql(`
  fragment Fragment4577 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult4577 = ResultOf<typeof FRAGMENT_4577>;
type FragmentSelf4577 = NonNullable<FragmentResult4577>;

export type FragmentToken4577 =
  | FragmentSelf4577["__typename"]
  | FragmentSelf4577["typenameHint"] | FragmentToken4575 | FragmentToken4576;
