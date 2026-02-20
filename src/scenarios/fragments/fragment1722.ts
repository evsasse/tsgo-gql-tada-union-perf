import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1720 } from "./fragment1720";
import type { FragmentToken1721 } from "./fragment1721";

export const FRAGMENT_1722 = gql(`
  fragment Fragment1722 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult1722 = ResultOf<typeof FRAGMENT_1722>;
type FragmentSelf1722 = NonNullable<FragmentResult1722>;

export type FragmentToken1722 =
  | FragmentSelf1722["__typename"]
  | FragmentSelf1722["typenameHint"] | FragmentToken1720 | FragmentToken1721;
