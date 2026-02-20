import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2021 } from "./fragment2021";
import type { FragmentToken2022 } from "./fragment2022";

export const FRAGMENT_2023 = gql(`
  fragment Fragment2023 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult2023 = ResultOf<typeof FRAGMENT_2023>;
type FragmentSelf2023 = NonNullable<FragmentResult2023>;

export type FragmentToken2023 =
  | FragmentSelf2023["__typename"]
  | FragmentSelf2023["typenameHint"] | FragmentToken2021 | FragmentToken2022;
