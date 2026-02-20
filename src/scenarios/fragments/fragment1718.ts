import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1716 } from "./fragment1716";
import type { FragmentToken1717 } from "./fragment1717";

export const FRAGMENT_1718 = gql(`
  fragment Fragment1718 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult1718 = ResultOf<typeof FRAGMENT_1718>;
type FragmentSelf1718 = NonNullable<FragmentResult1718>;

export type FragmentToken1718 =
  | FragmentSelf1718["__typename"]
  | FragmentSelf1718["typenameHint"] | FragmentToken1716 | FragmentToken1717;
