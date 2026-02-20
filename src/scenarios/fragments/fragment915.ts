import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken913 } from "./fragment913";
import type { FragmentToken914 } from "./fragment914";

export const FRAGMENT_915 = gql(`
  fragment Fragment915 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult915 = ResultOf<typeof FRAGMENT_915>;
type FragmentSelf915 = NonNullable<FragmentResult915>;

export type FragmentToken915 =
  | FragmentSelf915["__typename"]
  | FragmentSelf915["typenameHint"] | FragmentToken913 | FragmentToken914;
