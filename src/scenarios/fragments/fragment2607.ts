import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2605 } from "./fragment2605";
import type { FragmentToken2606 } from "./fragment2606";

export const FRAGMENT_2607 = gql(`
  fragment Fragment2607 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult2607 = ResultOf<typeof FRAGMENT_2607>;
type FragmentSelf2607 = NonNullable<FragmentResult2607>;

export type FragmentToken2607 =
  | FragmentSelf2607["__typename"]
  | FragmentSelf2607["typenameHint"] | FragmentToken2605 | FragmentToken2606;
