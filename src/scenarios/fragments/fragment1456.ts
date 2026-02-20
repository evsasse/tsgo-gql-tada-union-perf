import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1454 } from "./fragment1454";
import type { FragmentToken1455 } from "./fragment1455";

export const FRAGMENT_1456 = gql(`
  fragment Fragment1456 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult1456 = ResultOf<typeof FRAGMENT_1456>;
type FragmentSelf1456 = NonNullable<FragmentResult1456>;

export type FragmentToken1456 =
  | FragmentSelf1456["__typename"]
  | FragmentSelf1456["typenameHint"] | FragmentToken1454 | FragmentToken1455;
