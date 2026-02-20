import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken575 } from "./fragment575";
import type { FragmentToken576 } from "./fragment576";

export const FRAGMENT_577 = gql(`
  fragment Fragment577 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult577 = ResultOf<typeof FRAGMENT_577>;
type FragmentSelf577 = NonNullable<FragmentResult577>;

export type FragmentToken577 =
  | FragmentSelf577["__typename"]
  | FragmentSelf577["typenameHint"] | FragmentToken575 | FragmentToken576;
